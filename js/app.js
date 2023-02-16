const addBtn = $("#addTodoList");
const formArea = $(".form_input_area");
const todoForm = $("#todoForm");
//* CREATE NEW INPUT TAG
const newInputForm = () => {
  let newInput = ` <input type="text" class="form-control my-2" placeholder="Example : Do your Homework..." name="todo[]">`;
  formArea.append(newInput);
};

//* CLICK EVENT ON ADD BUTTON
addBtn.on("click", newInputForm);

//* INITIATE SWEAT ALERT
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

//* CHECKING VALIDATION IN JQUERY

const invalidFeedback = (
  input,
  msg = "Something went wrong",
  type = "error"
) => {
  input.classList.add("invalid");
  Toast.fire({
    icon: type,
    title: msg,
  });
};

const resetFormValidation = (input) => {
  input.classList.remove("invalid");
};

const checkValidation = (e) => {
  e.preventDefault();
  const inputs = $(`#todoForm input[type="text"]`);

  //* iterating through inputs object

  inputs.map((key, input) => {
    //*RESETING OLD VLAIDATION
    resetFormValidation(input);

    //*CHECKING FOR VALIDATION
    if (input.value == "") {
      invalidFeedback(input, "Please fill out all the inputs");
    } else if (input.value.length > 5) {
      invalidFeedback(input, "Can't save big todo list");
    }
  });
};

//*FORM SUBMIT
todoForm.on("submit", checkValidation);

// Toast.fire({
//   icon: "error",
//   title: "Signed in successfully",
// });
