function transmite() {
    let text = document.getElementById("intrebare").value;
    window.open("mailto:bitca.ernest@gmail.com?subject=Intrebare&body=" + text);
}