
let vm = new Vue({
  el: '#app',
  data: {
    userInput: '',
    questions: [],
  }
});

function jsonpReturn(v) {
  let que = v || [];
  que = que.map(q => (
    {
      id: q.id,
      question: Traditionalized(q.question),
      answer: Traditionalized(q.answer),
    })
  );
  vm.questions.splice(0, vm.questions.length);
  vm.questions.push(...que);
}

vm.$watch('userInput', function (newValue, oldValue) {
  const url = 'http://huodong.duowan.com/wxdatiqi/backend/index.php?r=index/GetQuestionByKeyword&callback=jsonpReturn&keyword=';
  const key = Simplized(newValue);
  jsonp(url + encodeURIComponent(key));
});
