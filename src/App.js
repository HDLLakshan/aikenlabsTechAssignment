import './assets/css/main.css'
import './assets/css/custom.css'
import BaseLayout from "./layouts/BaseLayout";
import SamplePage from "./page/SamplePage";
import {useState} from "react";
import useUndo from 'use-undo';


const initialSet = [
    {
        id: '0',
        name: 'Sales',
        chartType: 'line'

    },
    {
        id: '1',
        name: 'Stocks',
        chartType: 'pie'

    },
    {
        id: '2',
        name: 'Improve',
        chartType: 'bar'

    },

]

function App() {

    const [
        chartListState,
        {
            set: setChartList,
            undo: undoCount,
        },
    ] = useUndo({list: initialSet});
    const {present: chartList} = chartListState;

    const [search, setSearch] = useState('');

    function addNewChart(obj) {
        if (chartList.list.length === 16) {
            alert('Only 16 charts can be add')
        } else {
            let item = chartList.list
            item.push(obj)
            setChartList({list: chartList.list})
        }
    }

    function editChartById(obj) {
        let updatedList = chartList.list.map(item => {
            if (item.id === obj.id) {
                return {...item, name: obj.name, chartType: obj.chartType};
            }
            return item;
        });
        console.log(updatedList)
        setChartList({list: [...updatedList]})
        console.log(chartList.list)

    }

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(chartList.list);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setChartList({list: items});
    }

    function deleteById(id) {
        setChartList({list: chartList.list.filter(item => item.id !== id)});
    }

    function searchByName() {
        console.log(chartList.list)
        if (search) {
            let updatedList = []
            updatedList = chartList.list.filter(function (el) {
                return el.name.toLowerCase().includes(search.toLowerCase())
            });

            return updatedList
        } else
            return chartList.list

    }


    return (
        <div className="App ">
            <BaseLayout chartList={chartList.list} addNewChart={addNewChart} setSearch={setSearch} undo={undoCount}>
                <SamplePage chartList={searchByName()} editChartById={editChartById} handleOnDragEnd={handleOnDragEnd}
                            deleteById={deleteById}/>
            </BaseLayout>
        </div>
    );
}

export default App;
