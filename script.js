//your JS code here. If required.
function input(){
	const body=document.getElementByTagName("body");
	const p=document.createElement("p");
	p.innerText="DOM load success";
	body.append(p);
}
input();