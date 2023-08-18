import { imgs , categories } from '../data'
import CategoryCard from './CategoryCard'

const [ 
    imgPescar, 
] = imgs

const CategoryList = () => {
    return (
        <div className='flex flex-wrap flex-row justify-center gap-4 mt-10'>

            {/* Category Link Kanto */}
            <CategoryCard 
                category={categories.pescar} /* props */
                src={imgPescar} 
                alt={`Categoria ${categories.pescar}`}
                gradientColor='from-purple-500 to-pink-500'
                />
        </div>
    )
}

export default CategoryList
