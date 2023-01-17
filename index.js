function introduction(name){
    if (name == "Aki")  {
        return  "Hi, my name is Aki.";  
    }    else if (name == "Samip")  {
        return "Hi, my name is Samip."
    } 
}//console.log(introduction) 

function introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }
  introductionWithLanguage("Aki", "Ember.js");
  introductionWithLanguage("Samip", "React");
  
  function introductionWithLanguageOptional(name, language = "JavaScript"){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
  }
  introductionWithLanguageOptional(Gracie, language); //Use this standard from now on. Bring the function out.





  
/*function introductionWithLanguage(name, language){
        if (name, language === "Aki", "Ember.js")  {
        return "Hi, my name is Aki and I am learning to program in Ember.js.";  
    }   else if (name, language === "Samip", "React")  {
        return  "Hi, my name is Samip and I am learning to program in React.";
    }
}

function introductionWithLanguageOptional(name, language = "JavaScript")    {
    if (name, language === "Gracie", `${language}` )  {
        return  "Hi, my name is Gracie and I am learning to program in JavaScript."
    }
}       

function introductionWithLanguageOptional(name, language = "Python"){
    if  (name, language === "Gracie", language)  {
        return "Hi, my name is Gracie and I am learning to program in Python."}
}
*/
