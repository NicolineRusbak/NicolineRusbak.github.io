
//funktion der fjerner webapp
function showWebsite() {
    let df = document.getElementById("df");
    if (df.style.display === "none") {
      df.style.display = "block";
    } else {
      df.style.display = "none";
    }
}

//funktion der fjerner websites
function showWebapp() {
  let umf = document.getElementById("umf");
  let cf = document.getElementById("cf");
  if (umf.style.display === "none" & cf.style.display === "none") {
    umf.style.display = "block";
    cf.style.display = "block";
  } else {
    umf.style.display = "none";
    cf.style.display = "none";
  }
}

