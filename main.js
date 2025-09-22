const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus')
const itemNo = document.querySelectorAll('.itemNo')


plus.forEach((p) => {
  p.addEventListener('click', function add() {
    const input = p.previousElementSibling;
    console.log(`max=${input.max}`);
    if (input.value < parseInt(input.max)) {
      input.value++;
    }
    // else {
    //   alert('The maximum value is 10');
    // }
  });
})


minus.forEach((m) => {
  m.addEventListener('click', function sub() {
    const input = m.nextElementSibling;
    console.log(`min=${parseInt(input.min)}`);
    if (input.value <= parseInt(input.max) && input.value > parseInt(input.min)) {
      input.value--;
    }
    // else {
    //   alert('The minimun value is 1');
    // }
  });
})


itemNo.forEach((f) => {
  f.addEventListener('click', () => {
    f.lastElementChild.children[1].focus();
  })
})