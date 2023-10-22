//your JS code here. If required.
function input(){
	const body=document.getElementsByTagName("body")[0];
	// const script=document.getElementsByTagName("script")[0];
	const p=document.createElement("p");
	p.innerText="DOM load success";
	body.append(p);
}
input();