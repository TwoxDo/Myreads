import Categories from "../components/Categories"
export default function Home({ books, updateCategory }) {
  return (
    <div className="list-books">
      <Categories books={books} updateCategory={updateCategory} />


    </div>
  )
}
