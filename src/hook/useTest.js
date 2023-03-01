const useTest =(fun)=>{
    const url='https://6245b93d6b7ecf057c23abe2.mockapi.io/products';

    const fet=async ()=>{
        try{
            const res= await fetch(url);
            if(!res.ok) throw res.json();
            

        }catch(data){
            console.log(data)
        }
    }
    return fet;
}