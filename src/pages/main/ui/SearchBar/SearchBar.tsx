import { AutoComplete } from 'antd';

export const SearchBar = () => {
  return (
    <div>
      <AutoComplete
        options={[]}
        style={{ width: '100%' }}
        placeholder="Search for news articles on specific topics, such as 'iPhone,' 'Apple,' 'Trump,' or 'Bitcoin.'"
      />
    </div>
  );
};
