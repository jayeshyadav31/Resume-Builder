import { atom } from "recoil";
const projectsAtom=atom({
    key:'projectsAtom',
    default:[{
        projectName:'',
        description:'',
    }]
})
export default projectsAtom