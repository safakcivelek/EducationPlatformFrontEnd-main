import Wrapper from "@/layout/DefaultWrapper";
import CategorySectionsMain from "@/components/category/CategorySectionsMain";

const CategorySectionsPage = ({ params }: { params: { id:string } }) => {
    const id = params.id
    
    return (
        <Wrapper>
            <main>            
                <CategorySectionsMain id={id}/>               
            </main>
        </Wrapper>
    );
};

export default CategorySectionsPage;