function randomPassword(length)
{
  chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$*{}!@%";
  pass = "";
  for(x=0;x<length;x++)
  {
    i = Math.floor(Math.random() * 69 );
    pass += chars.charAt(i);
  }
  return pass;
}

function formSubmit()
{
  passform.passbox.value = randomPassword(passform.length.value);
  return false;
}
