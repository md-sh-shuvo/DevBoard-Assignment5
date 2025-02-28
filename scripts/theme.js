function theme(){
    const themes = ['#F4F7FF', '#F6F0F0', '#D3E671', '#EBE5C2', '#B7B1F2', '#FBFFE4', '#FFCF50', '#000957', '#FDAB9E'];

    let randomTheme = Math.floor(Math.random()*themes.length);
    return themes[randomTheme];
}



getID('btn-theme').addEventListener('click', function(){
    document.body.style.backgroundColor = theme();
})
