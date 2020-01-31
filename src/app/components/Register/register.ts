tryRegister(value){
  this.authService.doRegister(value)
  .then(res => {
    console.log(res);
    this.errorMessage = "";
    this.successMessage = "Your account has been created";
  }, err => {
    console.log(err);
    this.errorMessage = err.message;
    this.successMessage = "";
  })
}