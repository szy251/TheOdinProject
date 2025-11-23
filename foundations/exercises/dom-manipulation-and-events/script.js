const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

let p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey, I'm red!";

container.appendChild(p);

let h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "Hey, I'm blue h3!";

container.appendChild(h3);

let div = document.createElement("p");
div.style.border = "solid black 2px";

let h1 = document.createElement("h1");
h1.textContent = "I'm in div!";

div.appendChild(h1);

p = document.createElement("p");
p.textContent = "ME TOO";

div.appendChild(p);

container.appendChild(div);

const btn = document.querySelector("#btn");

const btn2 = document.querySelector("#btn_2");
btn2.addEventListener("click", () => {
	alert("Hello World");
});

btn.addEventListener("click", function (e) {
	e.target.style.background = "blue";
});
