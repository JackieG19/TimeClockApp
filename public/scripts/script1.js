const changeBtn = document.getElementById("change-btn");
const inputSpan = document.getElementById("input-span");
const saveBtn1 = document.getElementById("save-btn1");
const addEmpBtn = document.getElementById("add-emp-btn");
const addEmp = document.getElementById("add-emp");
const empForm =	document.getElementById("emp-form");
const clockForm = document.getElementById("clock-form");
const saveBtn2 = document.getElementById("save-btn2");
const inBtn = document.getElementById("in-btn");
const outBtn = document.getElementById("out-btn");
const selEmp = document.getElementById("select-emp");


changeBtn.addEventListener('click', function(){
		changeBtn.classList.add('hidden');
		inputSpan.classList.remove('hidden');
});

saveBtn1.addEventListener('click', function(e){
		changeBtn.classList.remove('hidden');
		inputSpan.classList.add('hidden');
		e.preventDefault();
});

addEmpBtn.addEventListener('click', function(){
	addEmpBtn.classList.add('hidden');
	addEmp.classList.add('hidden');	
	empForm.classList.remove('hidden');
	clockForm.classList.add('hidden');
});

saveBtn2.addEventListener('click', function(e){
	empForm.classList.add('hidden');
	addEmpBtn.classList.remove('hidden');
	clockForm.classList.remove('hidden');
	addEmp.classList.remove('hidden');
	e.preventDefault();
});

inBtn.addEventListener('click', function(){
	inBtn.setAttribute('disabled', 'disabled');
	outBtn.removeAttribute('disabled');

  console.log('button was clicked');

});

outBtn.addEventListener('click', function(){
	outBtn.setAttribute('disabled', 'disabled');
	inBtn.removeAttribute('disabled');
});

selEmp.addEventListener('change', function(){
	outBtn.setAttribute('disabled', 'disabled');
	inBtn.removeAttribute('disabled');
});

// const button = document.getElementById('myButton');
// button.addEventListener('click', function(e) {
//   console.log('button was clicked');

//   fetch('/clicked', {method: 'POST'})
//     .then(function(response) {
//       if(response.ok) {
//         console.log('Click was recorded');
//         return;
//       }
//       throw new Error('Request failed.');
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });
