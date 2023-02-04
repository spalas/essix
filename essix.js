document.getElementById("apply-bg").addEventListener("click", function () {
    // console.log("appy backgound");

    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
        friend.style.backgroundColor = "lightblue"
    }
})

document.getElementById("third-center").addEventListener("click", function () { 
    const thirds = document.getElementById('thid-pzi');
    thirds.style.textAlign = "center"

})

document.getElementById('add-friend').addEventListener("click", function () { 
    // console.log('checking')
    const friendConatiner = document.getElementById('add-friends')
    const friend = document.createElement('div')
    friend.classList.add('friend')
    friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>something new friend<P>`

    friendConatiner.appendChild(friend)
})