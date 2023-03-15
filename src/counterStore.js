import { action, computed, makeObservable, observable } from "mobx";

export default class counterStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable, // state를 저장하는 추적 가능한 필드를 정의합니다.
      isNegative: computed, // state로부터 새로운 사실을 도출하고 그 결괏값을 캐시하는 getter를 나타냅니다.
      increase: action, // state를 수정하는 메서드를 표시합니다.
      decrease: action,
    });
  }

  get isNegative() {
    return this.count < 0 ? "Yes" : "No";
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }
}
