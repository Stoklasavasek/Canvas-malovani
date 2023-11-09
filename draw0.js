// Získání reference k HTML canvas elementu s id 'myCanvas'
let canvas = document.getElementById("myCanvas");

// Získání 2D vykreslovacího kontextu pro canvas
let ctx = canvas.getContext("2d");

// Nastavení barvy výplně na šedou
ctx.fillStyle = "#FFFFFF";

// Vykreslení obdélníka, který pokryje celý canvas touto šedou barvou
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Přidání posluchače událostí k celému dokumentu pro detekci stisku klávesy
document.addEventListener("keydown", function (event) {
    console.log(event);
    // Kontroluje, zda byla stisknuta klávesa Escape
    if (event.code === "Escape") {
      // Pokud ano, znovu vykreslí celý canvas šedou barvou
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return; // Ukončení funkce
    }
  
    switch (event.key) {
      case "q":
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = Math.random() * 100 + 50;
        let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255
          })`;
        drawRectangle(x, y, size, size, col);
        break;
      case "w":
        randomEllipse();
        break;
      case "t":
        randomHexagon();
        break;
      case "e":
        randomTriangle();
        break;
      case "r":
        randomPentagon();
        break;
    }
  });

function randomEllipse() {
  let w = Math.random() * 100 + 50;
  let h = Math.random() * 100 + 50;
  let x = Math.random() * (canvas.width - w) + w / 2;
  let y = Math.random() * (canvas.height - h) + h / 2;
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255
    })`;
  drawEllipse(x, y, w, h, c);
}

function drawRectangle(x, y, w, h, col) {
  ctx.fillStyle = col;
  ctx.strokeStyle = col;
  ctx.lineWidth = 5;
  ctx.strokeRect(x, y, w, h);
}

function drawEllipse(x, y, w, h, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
  ctx.fill();
}

function drawCircle(x, y, r, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

function drawSquare(x, y, s, col) {
  ctx.fillStyle = col;
  ctx.fillRect(x, y, s, s);
}

function randomTriangle() {
  let size = Math.random() * 100 + 50;
  let x1 = Math.random() * (canvas.width - size); 
  let y1 = Math.random() * (canvas.height - size); 
  let x2 = x1 + size;
  let y2 = y1;
  let x3 = x1 + size / 2;
  let y3 = y1 - (Math.sqrt(3) * size) / 2;
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawTriangle(x1, y1, x2, y2, x3, y3, c);
}

function drawTriangle(x1, y1, x2, y2, x3, y3, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fill();
}

function randomHexagon() {
    let size = Math.random() * 100 + 50;
    let x = Math.random() * (canvas.width - size);
    let y = Math.random() * (canvas.height - size);
    let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    drawHexagon(x, y, size, c);
  }
  
  function drawHexagon(x, y, size, col) {
    ctx.fillStyle = col;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      ctx.lineTo(x + size * Math.cos((2 * Math.PI * i) / 6), y + size * Math.sin((2 * Math.PI * i) / 6));
    }
    ctx.closePath();
    ctx.fill();
  }

function randomPentagon() {
  let size = Math.random() * 100 + 50;
  let x = Math.random() * (canvas.width - size);
  let y = Math.random() * (canvas.height - size);
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawPentagon(x, y, size, c);
}

function drawPentagon(x, y, size, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    ctx.lineTo(x + size * Math.cos((2 * Math.PI * i) / 5), y + size * Math.sin((2 * Math.PI * i) / 5));
  }
  ctx.closePath();
  ctx.fill();
}



  
 
  