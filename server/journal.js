import db from './firebase';
import {onValue, ref, set} from "firebase/database";



function writeJournalData(userId, name, journalEntry){
    const journalData = ref(db, 'users/' + userId);
    const newData = push(journalData); //skip this line and pass in journalData below if you want to change it to not be a list. 
    set(newData, {
      username: name,
      time: Date.now(),
      entry: journalEntry
    });
  }
  
  function getAllJournalData(userId){
    const currentRef = ref(db, 'users/' + userId);
    let dataList = []; //array of JSON objects of key and datas. 
    onValue(currentRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        dataList.push({user: userId, key: childKey, data: childData});
      })
    });
  }
  
  function getRecentJournalData(userId){
    const currentRef = ref(db, 'users/' + userId);
    const childKey = "";
    const childData = "";
    onValue(currentRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
      })
    }, {
        onlyOnce: true
    });
    return {user: userId, key: childKey, data: childData};
  }