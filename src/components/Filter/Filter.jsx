import { LabelFilter } from "./Filter.styled"
import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "redux/filterSlice";


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const onChangeInputFilter = (e) => {
    const { value } = e.target;
    dispatch(setNameFilter(value));
  };


  return <LabelFilter>
          <span>Find contacts by name</span>
          <input
        type="text"
        value={filter} 
        onChange={onChangeInputFilter}
          />
        </LabelFilter>

}