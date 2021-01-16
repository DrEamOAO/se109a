function search(a,n)
{
    var bot = 0
    var top = a.length-1

    while(bot<=top)
    {
        var mid = Math.floor((bot+top)/2)
        if(a[mid]=== n)
        {
            return mid
        }
        if(a[mid]>n)
        {
            top = mid-1
        }
        if(a[mid]<n)
        {
            bot = mid+1
        }
    }
    return null
}
var t = search([1, 3, 4, 6, 7, 8], 4)
console.log('t=', t)
var t = search([1, 3, 4, 6, 7, 8], 5)
console.log('t=', t)
var t = search([1, 3, 4, 6, 7, 8], 8)
console.log('t=', t)
var t = search([1, 3, 4, 6, 7, 8], 9)
console.log('t=', t)