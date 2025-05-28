fetch("http://localhost:3300/api/frases")
      .then(res => res.json())
      .then(data => {
        document.getElementById("frase").textContent = `"${data.frase}"`;
        document.getElementById("autor").textContent = `– ${data.autor}`;
      })
      .catch(err => {
        document.getElementById("frase").textContent = "Erro ao buscar frase.";
        console.error(err);
      });