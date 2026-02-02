const gamelinks=document.getElementById('gamelinks');

gamelinks.addEventListener('click',function(link) {
  if(link.target.id=='savegame') {
    save();
  } else if(link.target.id=='loadgame') {
    load();
  } else if(link.target.id=='deletegame') {
    del();
  }
})

function save() {
  let url=window.location.href;
  const dataname=document.title+" Save Data"
  const savepage=localStorage.setItem(dataname,url);

  if(typeof (Storage)!=="undefined") {
    console.log("Saving Data");
    savepage;
    window.alert("Page saved!");
  } else {
    console.log("No Web storage support!");
    window.alert("No Web storage support!");
  }
}

function load() {
  const dataname=document.title+" Save Data"
  const loadpage=localStorage.getItem(dataname);

  if(loadpage!==null) {
    console.log("Loading data");
    window.location.href=loadpage;
  } else {
    console.log("No data");
    window.alert("There is no save data.");
  }
}

function del() {
  const dataname=document.title+" Save Data"
  const loadpage=localStorage.getItem(dataname);
  const delpage=localStorage.removeItem(dataname);
