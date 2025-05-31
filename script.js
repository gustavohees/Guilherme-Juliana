
import { db, storage } from './firebase.js';
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const form = document.getElementById('messageForm');
const statusDiv = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusDiv.textContent = "Enviando...";

  const nome = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const files = document.getElementById('fileInput').files;

  const uploadedFiles = [];

  for (let file of files) {
    const storageRef = ref(storage, 'uploads/' + Date.now() + '-' + file.name);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    uploadedFiles.push({ name: file.name, url, type: file.type });
  }

  await addDoc(collection(db, 'mensagens'), {
    nome,
    mensagem,
    arquivos: uploadedFiles,
    timestamp: Timestamp.now()
  });

  form.reset();
  statusDiv.textContent = "Mensagem enviada com sucesso!";
});
