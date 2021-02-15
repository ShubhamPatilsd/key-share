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

/*document.getElementById("form").addEventListener("submit",send);

function send(e){      
      //<iframe width="100%" height="500px" src="https://www.youtube.com/embed/Za0qIOprR1Q?start=391" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      let timestamp=document.getElementById("timestamp").value.split(":");
      let secondsCounter=0;
      let multiplier=1;
      console.log(timestamp);
      for(let i=timestamp.length-1;i>-1;i--){
        secondsCounter+=timestamp[i]*multiplier;
        multiplier*=60;
      }
      
      db.ref('/messages/' + (Date.now()).toString()).set({
        embed: "https://www.youtube.com/embed/"+document.getElementById("url").value.slice(32)+"?start="+secondsCounter,
        time: Date.now()
      });
      
    
      console.log("Sent");
    
    
}*/
document.getElementById("form").addEventListener("submit",postChat);





function postChat(e){
    e.preventDefault();
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to delete this posting!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, post it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Sent!',
          'The video and timestamp are posting. You will be redirected to the homepage soon',
          'success'
        )

        let timestamp=document.getElementById("timestamp").value.split(":");
    
    
    let secondsCounter=0;
    let multiplier=1;
      
      for(let i=timestamp.length-1;i>-1;i--){
        secondsCounter+=timestamp[i]*multiplier;
        multiplier*=60;
      }
    
    
    
    db.ref("sounds/"+Date.now()).set({
        embed: "https://www.youtube.com/embed/"+document.getElementById("url").value.slice(32)+"?start="+secondsCounter,
        thumbnail: "https://img.youtube.com/vi/"+document.getElementById("url").value.slice(32)+"/maxresdefault.jpg",
        title: document.getElementById("title").value
        
    });
    
    setTimeout(function(){
      window.location.href="index.html";
    },1200)
        //window.location.href="index.html";
      }
    })



    
    
    
}

