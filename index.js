var firebaseConfig = {
    apiKey: "AIzaSyBnTaZJ4mhNVrzZNuk6wiZwek23ypQDw_s",
    authDomain: "keyshare-f0f98.firebaseapp.com",
    databaseURL: "https://keyshare-f0f98-default-rtdb.firebaseio.com",
    projectId: "keyshare-f0f98",
    storageBucket: "keyshare-f0f98.appspot.com",
    messagingSenderId: "364324106355",
    appId: "1:364324106355:web:c15c6e586f56da911cfa06"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.database();

function showTheSwal(s,titleThing){
    
    Swal.fire({
        title: titleThing,
        showCloseButton: true,
        //html: '<iframe width="100%" height="500px" src="https://www.youtube.com/embed/aeqnEJpPZVY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        html: '<iframe width="100%" height="720px" src="'+s+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        customClass: 'swal-big',
        showConfirmButton: false // There won't be any confirm button
    });
}


const fetchChat=db.ref("sounds/");
fetchChat.on("child_added",function(snapshot){
    const message = snapshot.val();
    let test="`"+message.embed+"`,`"+message.title+"`";
    const msg = `<div class="responsive">
    <div class="gallery" onclick="showTheSwal(\`${message.embed}\`,\`${message.title}\`)">
        
            <img src="`+message.thumbnail+`" alt="Video Thumbail" width="1280" height="720">
        
        
        <div class="desc">`+message.title+`</div>
    </div>
    </div>`;

    document.getElementById("keebs").innerHTML += msg;
    
})


/*      <div class="responsive">
            <div class="gallery" onclick="showTheSwal('https\://www.youtube.com/embed/hMoTeGyCAtc?start=513')">
                
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7c7_FDBXA1o%2Fmaxresdefault.jpg&f=1&nofb=1" alt="Cinque Terre" width="600" height="400">
                
                
                <div class="desc">Add a description of the image here</div>
            </div>
            </div>

            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="#">
                        <img src="https://i.ytimg.com/vi/FjTrVZAfUcU/maxresdefault.jpg" alt="Cinque Terre" width="600" height="400">
                      </a>
                    
                    <div class="desc">Add a description of the image here</div>
                </div>
                </div>
                */

function darkMode(){

    let elementBody = document.body;
    let divs = document.getElementsByClassName("gallery");
    elementBody.classList.toggle("dark-mode");
    for(let i = 0;i<divs.length;i++){
        let item=divs[i];
        item.classList.toggle("dark-mode");
    }
    document.getElementsByTagName('html')[0].classList.toggle("dark-mode");
    console.log(document.getElementById('dark-mode-label').value);
    if(document.getElementById('dark-mode-label').innerHTML=="Light Mode Toggle:"){
        document.getElementById('dark-mode-label').innerHTML="Dark Mode Toggle:"
    }else{
        document.getElementById('dark-mode-label').innerHTML="Light Mode Toggle:"
    }
}