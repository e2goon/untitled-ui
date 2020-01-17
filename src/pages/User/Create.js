import React from "react";

// layouts
import Layout from "../../layouts";

// components
import { Row, Col } from "../../components/Grid";
import Icon from "../../components/Icon";
import Input, { InputGroup } from "../../components/Input";
import Spacer from "../../components/Spacer";
import Button, { ButtonGroup } from "../../components/Button";
import Select from "../../components/Select";
import Switch from "../../components/Switch";

import './create.scss';

export default function Create() {
  return (
    <Layout title="회원가입">
      <fieldset>
        <legend className="sr-only">회원가입 양식</legend>
        <form>
          <Row>
            <Input type="email" placeholder="아이디" autocomplete block />
          </Row>
          <Spacer />
          <Row>
            <Input type="password" placeholder="비밀번호" autocomplete block />
          </Row>
          <Spacer x3 />
          <ButtonGroup>
            <Button type="radio" name="gender" sm block checked>
              남자
            </Button>
            <Button type="radio" name="gender" sm block>
              여자
            </Button>
          </ButtonGroup>
          <Spacer x2 />
          <Row>
            <Col auto>
              <Icon name="birthday-cake" text="생일" style={{ marginRight: '12px' }} />
            </Col>
            <Col>
              <InputGroup>
                <Select text="2000년" sm>
                  <option value="2000">2000년</option>
                  <option value="2001">2001년</option>
                </Select>
                <Select text="1월" sm>
                  <option value="1">1월</option>
                  <option value="2">2월</option>
                  <option value="3">3월</option>
                </Select>
                <Select text="1월" sm>
                  <option value="1">1일</option>
                  <option value="2">2일</option>
                  <option value="3">3일</option>
                </Select>
              </InputGroup>
            </Col>
          </Row>
          <Spacer />
          <Row>
            <Col auto>
              <Icon name="phone-alt" text="전화" style={{ marginRight: '12px' }} />
            </Col>
            <Col>
              <InputGroup>
                <Select text="010" sm style={{ flex: 'none' }}>
                  <option value="010">010</option>
                  <option value="011">011</option>
                </Select>
                <Input type="text" sm block />
                <Button sm style={{ flex: 'none' }}>인증</Button>
              </InputGroup>
            </Col>
          </Row>
          <Spacer />
          <label className="agree">
            <span>모든 약관 내용에 동의합니다.</span>
            <Switch className="agree-switch" />
          </label>
          <Spacer x3 />
          <Button block>가입하기</Button>
        </form>
      </fieldset>
    </Layout>
  );
}
