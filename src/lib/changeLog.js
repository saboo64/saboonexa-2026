import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from './firebase';

// Records who changed what. A failure here never blocks the change itself.
export async function logChange(area, action, target) {
  try {
    await addDoc(collection(db, 'changeLog'), {
      uid: auth.currentUser.uid,
      email: auth.currentUser.email || '',
      area,
      action,
      target,
      at: new Date().toISOString(),
    });
  } catch (err) {
    console.error('Could not record the change:', err);
  }
}
