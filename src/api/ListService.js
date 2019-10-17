
/**
 * NAME         : List.js
 * DESCRIPTION  : simulate Api 및 데이터 관리 및 가공 JS
*/

const originData = {
  'error': false,
  'list': [
    {
      'id': 1,
      'title': '제3053차 성남 삼평동 봇들마을이지더원2단지아파트 담보상품',
      'typedStatus': '모집중',
      'rateOfReturn': 8.1,
      'loanPeriod': 6,
      'targetAmount': 140000000,
      'contractType': '부동산담보',
      'grade': 'A2',
      'investAmount': 92000000,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3223/19-LN-3223_20190829115229922.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 65
    },
    {
      'id': 2,
      'title': '제3048차 인천 송도중학교 인근 주상복합아파트 신축사업 9차',
      'typedStatus': '모집중',
      'rateOfReturn': 11,
      'loanPeriod': 7,
      'targetAmount': 1850000000,
      'contractType': '건축자금',
      'grade': 'A2',
      'investAmount': 464600000,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3218/19-LN-2774_20190514144218499.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 25
    },
    {
      'id': 3,
      'title': '제3056차 양주 옥정신도시 복합건축물 신축사업 사업자 대출 3차',
      'typedStatus': '모집중',
      'rateOfReturn': 14,
      'loanPeriod': 15,
      'targetAmount': 700000000,
      'contractType': '부동산담보',
      'grade': 'B2',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3231/19-LN-3220_20190828134407865.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 4,
      'title': '제3054차 강남 한티역 인근 근린생활시설 신축사업 사업자대출',
      'typedStatus': '모집중',
      'rateOfReturn': 15,
      'loanPeriod': 16,
      'targetAmount': 2260000000,
      'contractType': '건축자금',
      'grade': 'B1',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3224/19-LN-3224_2019082915190987.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 5,
      'title': '마포 아현동 아현아이파크아파트 담보상품',
      'typedStatus': '모집중',
      'rateOfReturn': 9.2,
      'loanPeriod': 12,
      'targetAmount': 100000000,
      'contractType': '부동산담보',
      'grade': 'A1',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3205/19-LN-3205_20190826170137449.png',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 6,
      'title': '제0000차 경의중앙선 운정역 인근 근린생활시설 신축사업',
      'typedStatus': '모집중',
      'rateOfReturn': 12,
      'loanPeriod': 11,
      'targetAmount': 2550000000,
      'contractType': '부동산담보',
      'grade': 'B1',
      'investAmount': 2040000000,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3198/19-LN-3198_20190816151120299.jpg',
      'soldOutSoon': 'TRUE',
      'currentRate': 80
    },
    {
      'id': 7,
      'title': '제3053차 성남 삼평동 봇들마을이지더원2단지아파트 담보상품',
      'typedStatus': '모집중',
      'rateOfReturn': 8.1,
      'loanPeriod': 6,
      'targetAmount': 140000000,
      'contractType': '건축자금',
      'grade': 'A2',
      'investAmount': 92000000,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3223/19-LN-3223_20190829115229922.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 65
    },
    {
      'id': 8,
      'title': '제3054차 강남 한티역 인근 근린생활시설 신축사업 사업자대출',
      'typedStatus': '모집중',
      'rateOfReturn': 15,
      'loanPeriod': 16,
      'targetAmount': 2260000000,
      'contractType': '건축자금',
      'grade': 'B1',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3224/19-LN-3224_2019082915190987.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 9,
      'title': '마포 아현동 아현아이파크아파트 담보상품',
      'typedStatus': '모집중',
      'rateOfReturn': 9.2,
      'loanPeriod': 12,
      'targetAmount': 100000000,
      'contractType': '건축자금',
      'grade': 'A1',
      'investAmount': 95000000,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3205/19-LN-3205_20190826170137449.png',
      'soldOutSoon': 'TRUE',
      'currentRate': 95
    },
    {
      'id': 10,
      'title': '제2차 경의중앙선 운정역 인근 근린생활시설 신축사업',
      'typedStatus': '모집중',
      'rateOfReturn': 12,
      'loanPeriod': 11,
      'targetAmount': 2550000000,
      'contractType': '부동산담보',
      'grade': 'B1',
      'investAmount': 2524500000,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3198/19-LN-3198_20190816151120299.jpg',
      'soldOutSoon': 'TRUE',
      'currentRate': 99
    },
    {
      'id': 11,
      'title': '마포 아현동 아현아이파크아파트 담보상품',
      'typedStatus': '모집중',
      'rateOfReturn': 9.2,
      'loanPeriod': 12,
      'targetAmount': 100000000,
      'contractType': '건축자금',
      'grade': 'A1',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3205/19-LN-3205_20190826170137449.png',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 12,
      'title': '마포 아현동 아현아이파크아파트 담보상품',
      'typedStatus': '모집중',
      'rateOfReturn': 9.2,
      'loanPeriod': 12,
      'targetAmount': 100000000,
      'contractType': '부동산담보',
      'grade': 'A1',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3205/19-LN-3205_20190826170137449.png',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 13,
      'title': '제3053차 성남 삼평동 봇들마을이지더원2단지아파트 담보상품',
      'typedStatus': '모집중',
      'rateOfReturn': 8.1,
      'loanPeriod': 6,
      'targetAmount': 140000000,
      'contractType': '부동산담보',
      'grade': 'A2',
      'investAmount': 92000000,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3223/19-LN-3223_20190829115229922.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 65
    },
    {
      'id': 14,
      'title': '제3048차 인천 송도중학교 인근 주상복합아파트 신축사업 9차',
      'typedStatus': '모집중',
      'rateOfReturn': 11,
      'loanPeriod': 7,
      'targetAmount': 1850000000,
      'contractType': '건축자금',
      'grade': 'A2',
      'investAmount': 464600000,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3218/19-LN-2774_20190514144218499.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 25
    },
    {
      'id': 15,
      'title': '제3056차 양주 옥정신도시 복합건축물 신축사업 사업자 대출 3차',
      'typedStatus': '모집중',
      'rateOfReturn': 14,
      'loanPeriod': 15,
      'targetAmount': 700000000,
      'contractType': '부동산담보',
      'grade': 'B2',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3231/19-LN-3220_20190828134407865.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 16,
      'title': '제3054차 강남 한티역 인근 근린생활시설 신축사업 사업자대출',
      'typedStatus': '모집중',
      'rateOfReturn': 15,
      'loanPeriod': 16,
      'targetAmount': 2260000000,
      'contractType': '건축자금',
      'grade': 'B1',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3224/19-LN-3224_2019082915190987.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 17,
      'title': '마포 아현동 아현아이파크아파트 담보상품',
      'typedStatus': '모집중',
      'rateOfReturn': 9.2,
      'loanPeriod': 12,
      'targetAmount': 100000000,
      'contractType': '부동산담보',
      'grade': 'A1',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3205/19-LN-3205_20190826170137449.png',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 18,
      'title': '제0000차 경의중앙선 운정역 인근 근린생활시설 신축사업',
      'typedStatus': '모집중',
      'rateOfReturn': 12,
      'loanPeriod': 11,
      'targetAmount': 2550000000,
      'contractType': '부동산담보',
      'grade': 'B1',
      'investAmount': 2040000000,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3198/19-LN-3198_20190816151120299.jpg',
      'soldOutSoon': 'TRUE',
      'currentRate': 80
    },
    {
      'id': 19,
      'title': '제3053차 성남 삼평동 봇들마을이지더원2단지아파트 담보상품',
      'typedStatus': '모집중',
      'rateOfReturn': 8.1,
      'loanPeriod': 6,
      'targetAmount': 140000000,
      'contractType': '건축자금',
      'grade': 'A2',
      'investAmount': 1400000,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3223/19-LN-3223_20190829115229922.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 1
    },
    {
      'id': 20,
      'title': '제3054차 강남 한티역 인근 근린생활시설 신축사업 사업자대출',
      'typedStatus': '대기중',
      'rateOfReturn': 15,
      'loanPeriod': 16,
      'targetAmount': 2260000000,
      'contractType': '건축자금',
      'grade': 'B1',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3224/19-LN-3224_2019082915190987.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 21,
      'title': '마포 아현동 아현아이파크아파트 담보상품',
      'typedStatus': '대기중',
      'rateOfReturn': 9.2,
      'loanPeriod': 12,
      'targetAmount': 100000000,
      'contractType': '건축자금',
      'grade': 'A1',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3205/19-LN-3205_20190826170137449.png',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 22,
      'title': '제2차 경의중앙선 운정역 인근 근린생활시설 신축사업',
      'typedStatus': '대기중',
      'rateOfReturn': 12,
      'loanPeriod': 11,
      'targetAmount': 2550000000,
      'contractType': '부동산담보',
      'grade': 'B1',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3198/19-LN-3198_20190816151120299.jpg',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 23,
      'title': '마포 아현동 아현아이파크아파트 담보상품',
      'typedStatus': '대기중',
      'rateOfReturn': 9.2,
      'loanPeriod': 12,
      'targetAmount': 100000000,
      'contractType': '건축자금',
      'grade': 'A1',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3205/19-LN-3205_20190826170137449.png',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    },
    {
      'id': 24,
      'title': '마포 아현동 아현아이파크아파트 담보상품',
      'typedStatus': '대기중',
      'rateOfReturn': 9.2,
      'loanPeriod': 12,
      'targetAmount': 100000000,
      'contractType': '건축자금',
      'grade': 'A1',
      'investAmount': 0,
      'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3205/19-LN-3205_20190826170137449.png',
      'soldOutSoon': 'FALSE',
      'currentRate': 0
    }
  ],
  'total': 24
}

let filterList = []
const outputListFormat = {
  list: [], // 페이지size 에 따른 리스트 정보
  totalPageNum: 0, // 총 페이지 수
  totalItemNum: 0 // 총 리스트 수
}

/**
* 함수명    : getPagePerList
* PARAM    : page(int), size(int)
* 설명      : Filter 된 아이템을 page와 size에 맞는 리스트 조회
*/
const getPagePerList = (filterOpt, page, size) => {
  let typedStatusArr = filterOpt.typedStatusArr
  let contractTypeArr = filterOpt.contractTypeArr
  const copyData = JSON.parse(JSON.stringify(originData))

  // [ 상품유형 , 상품상태 ] 조건 필터
  const list = copyData.list.filter(function (item) {
    const status = (typedStatusArr.length === 0) ? true : typedStatusArr.indexOf(item.typedStatus) > -1
    const contract = (contractTypeArr.length === 0) ? true : contractTypeArr.indexOf(item.contractType) > -1
    return status && contract
  })
  console.log(list)
  // [ 모집률 , ID ] sorting
  list.sort(function (a, b) {
    var o1 = a['rateOfReturn']
    var o2 = b['rateOfReturn']
    var p1 = a['id']
    var p2 = b['id']

    if (o1 < o2) return 1
    if (o1 > o2) return -1
    if (p1 < p2) return -1
    if (p1 > p2) return 1
    return 0
  })
  filterList = list

  let start = (page - 1) * size
  outputListFormat.list = [...filterList].splice(start, size)
  outputListFormat.totalPageNum = Math.ceil(getTotal() / size)
  outputListFormat.totalItemNum = getTotal()
  return outputListFormat
}

/**
* 함수명    : getTotal
* PARAM    :
* 설명      : Filter 된 아이템을 리스트 개수 조회
*/
const getTotal = () => {
  return filterList.length
}

const ListService = {
  getPagePerListData: (filterOpt, page = 1, size = 5) => {
    return getPagePerList(filterOpt, page, size)
  }
}

export default {
  ListService
}
