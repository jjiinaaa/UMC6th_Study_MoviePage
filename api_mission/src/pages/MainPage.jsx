import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  padding-top: 50px;
  background-color: #222;
  color: #e9e9e9;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const Search = styled.div`
  width: 100%;
  height: 40%;
  text-align: center;
  background-color: #e9e9e9;
  color: #000;
  font-weight: bold;
  font-size: 30px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

const SearchBarContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  margin: 20px auto;
  min-width: 250px;
`;

const SearchInput = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
`;

const SearchButton = styled.div`
  display: flex;
  margin-left: 15px;
  padding-bottom: 4px;
  cursor: pointer;
`;

const MainPage = () => {
  return (
    <Container>
      <Banner>Welcom to UMC Movie!</Banner>
      <Search>
        Find Your Movies!
        <SearchBarContainer>
          <SearchInput type="text" placeholder="영화 제목을 입력해주세요" />
          <SearchButton>🔘</SearchButton>
        </SearchBarContainer>
      </Search>
    </Container>
  );
};

export default MainPage;
