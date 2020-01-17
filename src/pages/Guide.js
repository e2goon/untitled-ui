import React from "react";
import Layout from "../layouts";

// components
import { Row, Col } from "../components/Grid";
import Icon from "../components/Icon";
import Input, { InputGroup } from "../components/Input";
import Button, { ButtonGroup } from "../components/Button";
import Spacer from "../components/Spacer";
import Select from "../components/Select";
import Switch from "../components/Switch";

export default function Guide() {
  return (
    <Layout title="UI 가이드">
      <section>
        <h1>
          어서오세요.{" "}
          <span role="img" aria-labelledby="hugging face">
            🤗
          </span>
        </h1>
        <p>
          간결하고 사용하기 쉬운 컴포넌트들을 제공하여, 개발자 경험 향상에
          기여하고자 합니다! 많은 관심 부탁드립니다~
        </p>
        <h2>Grid Row/Column</h2>
        <p>
          다양한 해상도에서 요소들을 일관되고 균등하게 배치하기 위해 Row/Col 를
          사용합니다.
        </p>
        <Row>
          <Col>col1</Col>
          <Col>col2</Col>
          <Col>col3</Col>
          <Col>col4</Col>
        </Row>
        <h3>균등 해제 auto</h3>
        <code>&lt;Col auto&gt;&lt;/Col&gt;</code> 를 추가하면 특정 칼럼만 균등을
        해제할 수 있어 요소를 자연스럽게 배치할 수 있습니다.
        <h2>Icon</h2>
        <p>
          Fontawesome 의 아이콘을 사용했으며 백그라운드 이미지로 출력하고 빌드
          시 Base64 인코딩으로 CSS 파일내에 아이콘이 포함되며 필요에 따라 인라인
          스타일을 추가할 수 있습니다.
        </p>
        <Icon name="birthday-cake" text="생일" />
        <Icon name="phone-alt" text="전화" />
        <h2>Input</h2>
        <p>입력폼은 inline 속성 block 속성 두가지로 구분하여 사용합니다.</p>
        <Input type="email" placeholder="인라인" autocomplete />
        <Input type="email" placeholder="블록" autocomplete block />
        <p>
          크기 속성을 가지는 sm, md, lg 세가지 중 sm 크기를 준비해봤습니다. sm
          는 기본 입력폼과 비교하여 약간 크기가 작습니다.
        </p>
        <Input type="email" placeholder="인라인" autocomplete sm />
        <Input type="email" placeholder="블록" autocomplete sm block />
        <h3>InputGroup</h3>
        <p>
          입력폼들을 &lt;InputGroup /&gt; 컴포넌트로 감싸면 좌우로 붙고 그룹
          컴포넌트로 활용할 수 있습니다.
        </p>
        <InputGroup>
          <Input type="email" placeholder="인라인" autocomplete />
          <Input type="email" placeholder="블록" autocomplete block />
        </InputGroup>
        <h2>Spacer</h2>
        <p>
          &lt;Spacer /&gt; 컴포넌트는 상하 여백을 주는 hr 태그와 비슷한
          컴포넌트입니다. 추후에 여러가지 사이즈를 가진 높이와 배경컬러를
          지정하여 커스텀할 수 있으며, 이를 활용하면 중첩 부모 엘리먼트들을 줄일
          수 있는 효과가 있습니다.
        </p>
        <h2>Button</h2>
        <p>
          입력폼과 마찬가지로 인라인과 블록 타입의 버튼을 갖고 있으며 sm 크기
          타입도 준비되어있습니다.
        </p>
        <Button>가입하기</Button>
        <Spacer />
        <Button block>가입하기</Button>
        <h3>Small 사이즈</h3>
        <Button sm>가입하기</Button>
        <Spacer />
        <Button sm block>
          가입하기
        </Button>
        <h3>선택 불가능한 버튼 그룹</h3>
        <ButtonGroup>
          <Button sm>가</Button>
          <Button sm>나</Button>
          <Button sm>다</Button>
        </ButtonGroup>
        <h3>선택 가능한 버튼 그룹</h3>
        <p>선택 가능한 버튼 그룹은 단순히 button 태그를 사용한 것이 아닌 input 태그의 checked 상태를 빌려 버튼의 on/off 기능을 제공하고 있습니다.</p>
        <ButtonGroup>
          <Button type="radio" name="gender" sm checked>
            남자
          </Button>
          <Button type="radio" name="gender" sm>
            여자
          </Button>
        </ButtonGroup>

        <h2>Select</h2>
        <p>select 태그를 활용하여 네이티브한 기능을 활용하기 위해 컴포넌트를 설계하였습니다. 동일하게 Normal, Small 사이즈 두가지를 표현할 수 있으며 block 속성도 줄 수 있습니다.</p>
        <Select text="2000년">
          <option value="2000">2000년</option>
          <option value="2001">2001년</option>
        </Select>
        <Select text="2000년" sm>
          <option value="2000">2000년</option>
          <option value="2001">2001년</option>
        </Select>
        <Spacer />
        <Select text="2000년" sm block>
          <option value="2000">2000년</option>
          <option value="2001">2001년</option>
        </Select>

        <h2>Switch</h2>
        <p>input checkbox 타입을 활용하여 스위치 구현. 이 컴포넌트를 label 태그로 래핑하여 텍스트와 연결해서 자유자재로 사용할 수 있도록 설계하였습니다.</p>
        <Switch />
        <Spacer />
        <label>
          <Switch />
          <span>약관 동의 문구가 오른쪽에 있어요.</span>
        </label>
        <Spacer />
        <label>
          <span>약관 동의 문구가 왼쪽에 있어요.</span>
          <Switch />
        </label>
        <p>텍스트 영역 클릭 시 스위치가 켜지도록 하기 위해 label 태그를 래핑하는 방안을 고려해보았습니다.</p>

      </section>
    </Layout>
  );
}
