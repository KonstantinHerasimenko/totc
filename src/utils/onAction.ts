export default function onAction(action:string,className:string){
  return className.split(" ").map((value)=>`${action}:${value}`).join(" ")
}