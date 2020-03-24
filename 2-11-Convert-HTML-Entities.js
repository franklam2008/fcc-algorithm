function convertHTML(str) {
    // &colon;&rpar;
    var arr=[];
    var original=['&','<','>','"',"'"];
    var change=['&amp;','&lt;','&gt;','&quot;','&apos;'];
    var newstr="";
    for(var i=0;i<str.length;i++){
      arr[i]=str[i];
      for(var j=0;j<original.length;j++){
        if(arr[i]===original[j]){
          arr[i]=change[j];
        };
      };
      newstr+=arr[i];
    };
    return newstr;
  }

  function convertHTML(str) {
    //Chaining of replace method with different arguments
      str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
    return str;
    }

    // test here
    convertHTML("Dolce & Gabbana");


  function convertHTML(str) {
      // Use Object Lookup to declare as many HTML entities as needed.
      var htmlEntities = {
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '\"':'&quot;',
        '\'':"&apos;"
      };
      //Use map function to return a filtered str with all entities changed automatically.
      return str.split('').map(function(entity){
        return htmlEntities[entity] || entity;
      }).join('');
}


  //convertHTML("Dolce & Gabbana") //should return Dolce &​amp; Gabbana.
  //convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &​lt; Pizza &​lt; Tacos.
  convertHTML('Stuff in "quotation marks"')//should return Stuff in &​quot;quotation marks&​quot;.
  //convertHTML("Sixty > twelve")// should return Sixty &​gt; twelve.
  //convertHTML("Schindler's List") //should return Schindler&​apos;s List.
  //convertHTML("<>") //should return &​lt;&​gt;.
  //convertHTML("abc") //should return abc.
