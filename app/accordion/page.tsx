import Accordion from "@/components/accordion/Accordion"


const AccordionPage = () => {
    const BooksItem =[{
        id:"1",
        label:"Spiderman",
        content:"your friendy neighborhood"
    },
    {
        id:"2",
        label:"Iornrman",
        content:"your friendy neighborhood"
    },
    {
        id:"3",
        label:"Aquaman",
        content:"your friendy neighborhood"
    }
]

    return (<Accordion Item={BooksItem}/>
    )
       
}
export default AccordionPage;