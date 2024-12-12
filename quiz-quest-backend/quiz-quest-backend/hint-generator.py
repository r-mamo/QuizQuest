import tensorflow as tf
import tensorflow_hub as hub

model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")

def generate_hint(question, answer):
    question_embedding = model([question])[0]
    answer_embedding = model([answer])[0]
    similarity = tf.tensordot(question_embedding, answer_embedding, axes=1)

    if similarity > 0.7:
        return "The answer is closely related to the question."
    elif similarity > 0.5:
        return "The answer is somewhat related to the question."
    else:
        return "The answer may not be directly related to the question."


