import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy options={[
        {value: "name-asc", label: "Sort by name (A-Z)"},
        {value: "name-desc", label: "Sort by name (Z-A)"},
        {value: "regularPrice-asc", label: "Sort by name price (from lowest)"},
        {value: "regularPrice-desc", label: "Sort by price (from highest)"},
        {value: "maxCapacity-asc", label: "Sory by capacity (from lowest)"},
        {value: "maxCapacity-desc", label: "Sory by capacity (from highest)"},
      ]}/>
    </TableOperations>
  );
}
