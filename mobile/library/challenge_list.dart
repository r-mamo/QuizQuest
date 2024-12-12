import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class ChallengeList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Challenges')),
      body: StreamBuilder<QuerySnapshot>(
        stream: FirebaseFirestore.instance.collection('challenges').snapshots(),
        builder: (context, snapshot) {
          if (!snapshot.hasData) return CircularProgressIndicator();
          return ListView(
            children: snapshot.data!.docs.map((doc) {
              return ListTile(
                title: Text(doc['title']),
                // Implement navigation to challenge solver
              );
            }).toList(),
          );
        },
      ),
    );
  }
}
