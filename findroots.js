/*
solving quadratic eq of type (X^2)A+B(X)+C below to get value of X
*/
function findRoot(A,B,C){
    /*
        to find root of X we do : 
        root 1= (-B +(B^2-4AC))/2A
        root 2= (-B -(B^2-4AC))/2A
    */
    let D=Math.sqrt(Math.pow(B,2)-(4*A*C));
    let root1=(D-B)/(2*A);
    let root2=(D+B)/(2*A);
    if(root1 >0 && root2 >0)
        return root1<root2?root1:root2;
    else if(root1 >0 )
        return root1;
    else 
        return root2;

}


module.exports=findRoot;
