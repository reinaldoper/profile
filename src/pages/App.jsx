import Generic from '../components/Generic';
import '../App.css'
import data from '../datas/dataProjetos'



function App() {

  const sorted = [...data].sort((a, b) => {
    if(a.title < b.title){
      return -1;
    }
    if(a.title > b.title){
      return 1;
    }
    return 0;
});

  return (
    <>
      <Generic dataType={sorted} />
    </>
  )
}

export default App
