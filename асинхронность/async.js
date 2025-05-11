const getUser=async(url)=>{
    const response=await fetch(url);
    const user =await response.text();
    console.log(user);
}

getUser('https://api.github.com/users/octocat');