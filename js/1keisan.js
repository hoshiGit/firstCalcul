// This is a JavaScript file

function makeQuestionNaitashi(){ //くりあがりのない足し算の問題配列作成
    var i;
    var bigLoopCountSetting; //大ループ回数設定
    var smallLoopCountSetting; //小ループ回数設定
    var bigLoopCount; //大ループカウント
    var smallLoopCount; //小ループカウント
    arrayQ0 = new Array;
    arrayQ1 = new Array;
    arrayQ2 = new Array;
    i=0;

    bigLoopCountSetting = 10;
    smallLoopCountSetting = 10;

    // 0+0だけループ外に作成
    arrayQ0[i] = 0;
    arrayQ1[i] = 0;
    arrayQ2[i] = 0;
    i++;

    //ループ開始
    bigLoopCount = bigLoopCountSetting;　//大ループはカウントダウン方式
    while(bigLoopCount > 0){

        smallLoopCount = smallLoopCountSetting; //小ループはカウントダウン方式
        while(smallLoopCount > 0){
            arrayQ0[i] = 11 - bigLoopCount;
            arrayQ1[i] = smallLoopCountSetting - smallLoopCount;
            arrayQ2[i] = 0;
            i++;
            smallLoopCount--;
        }
        smallLoopCountSetting--;
        bigLoopCount--;
    }

    arrayQ = [arrayQ0,arrayQ1,arrayQ2];
    console.log(arrayQ);
    return arrayQ;
}

function makeQuestionNaihiki(){ //くりさがりのない引き算の問題配列作成
    var i;
    var bigLoopCountSetting; //大ループ回数設定
    var smallLoopCountSetting; //小ループ回数設定
    var bigLoopCount; //大ループカウント
    var smallLoopCount; //小ループカウント
    arrayQ0 = new Array;
    arrayQ1 = new Array;
    arrayQ2 = new Array;
    i=0;

    bigLoopCountSetting = 10; //大ループ回数設定
    smallLoopCountSetting = 1; //小ループ回数設定

    // 0+0だけループ外に作成
    arrayQ0[i] = 0;
    arrayQ1[i] = 0;            
    arrayQ2[i] = 1;
    
    i++;

    //ループ開始
    bigLoopCount = bigLoopCountSetting;
    while(bigLoopCount > 0){

        smallLoopCount = 0;
        while(smallLoopCount < smallLoopCountSetting){
            arrayQ0[i] = 11 - bigLoopCount;
            arrayQ1[i] = smallLoopCount;
            arrayQ2[i] = 1;
            i++;
            smallLoopCount++;
        }
        smallLoopCountSetting++;
        bigLoopCount--;
    }

    arrayQ = [arrayQ0,arrayQ1,arrayQ2];
    console.log(arrayQ);
    return arrayQ;    
}

function makeQuestionAritashi(){ //くりあがりのある足し算の問題配列作成
    var i;
    var bigLoopCountSetting; //大ループ回数設定
    var smallLoopCountSetting; //大ループ回数設定
    var bigLoopCount; //大ループカウント
    var smallLoopCount; //小ループカウント
    arrayQ0 = new Array;
    arrayQ1 = new Array;
    arrayQ2 = new Array;

    i=0;

    bigLoopCountSetting = 9; //大ループ回数設定
    smallLoopCountSetting = 9;//小ループ回数設定

    //ループ開始
    bigLoopCount = bigLoopCountSetting;
    while(bigLoopCount > 1){

        smallLoopCount = bigLoopCount -1 ;
        while(smallLoopCount > 0){
            arrayQ0[i] = bigLoopCount;
            arrayQ1[i]= 10 - smallLoopCount;            
            arrayQ2[i] = 0;
            i++;
            smallLoopCount--;
        }
        bigLoopCount--;
    }

    arrayQ = [arrayQ0,arrayQ1,arrayQ2];
    console.log(arrayQ);
    return arrayQ;    
}

function makeQuestionArihiki(){ //くりさがりのある引き算の問題配列作成
    var i;
    var bigLoopCountSetting; //大ループ回数設定
    var smallLoopCountSetting; //小ループ回数設定
    var bigLoopCount; //大ループカウント
    var smallLoopCount; //小ループカウント
    arrayQ0 = new Array;
    arrayQ1 = new Array;
    arrayQ2 = new Array;

    i=0;

    bigLoopCountSetting = 8; //大ループ回数設定
    smallLoopCountSetting = 8; //小ループ回数設定


    //ループ開始
    bigLoopCount = 0;
    while(bigLoopCount < bigLoopCountSetting){

        smallLoopCount = 0;
        while(smallLoopCount < smallLoopCountSetting){
            arrayQ0[i] = 11 + bigLoopCount;
            arrayQ1[i] = 9 - smallLoopCount;
            arrayQ2[i] = 1;
            i++;
            smallLoopCount++;
        }
        smallLoopCountSetting--;
        bigLoopCount++;
    }

    arrayQ = [arrayQ0,arrayQ1,arrayQ2];
    console.log(arrayQ);
    return arrayQ;    
}

function makeQuestionKakezan(){ //かけ算の問題配列作成
    var i;
    var bigLoopCountSetting; //大ループ回数設定
    var smallLoopCountSetting; //小ループ回数設定
    var bigLoopCount; //大ループカウント
    var smallLoopCount; //小ループカウント
    arrayQ0 = new Array;
    arrayQ1 = new Array;
    arrayQ2 = new Array;
    i=0;

    bigLoopCountSetting = 9;
    smallLoopCountSetting = 9;

    //ループ開始
    bigLoopCount = 1;
    while(bigLoopCount <= bigLoopCountSetting){

        smallLoopCount = 1;
        while(smallLoopCount <= smallLoopCountSetting){
            arrayQ0[i] = bigLoopCount;
            arrayQ1[i] = smallLoopCount;
            arrayQ2[i] = 2;
            i++;
            smallLoopCount++;
        }
        bigLoopCount++;
    }

    arrayQ = [arrayQ0,arrayQ1,arrayQ2];
    console.log(arrayQ);
    return arrayQ;
}

function shuffleArray(myArray){ //3行の2次元配列のシャッフル

    var i;
    var min;
    var max;
    var temp;
    var shuffleArray = new Array;
    var shuffleArray0 = new Array;
    var shuffleArray1 = new Array;
    var shuffleArray2 = new Array;

    arrayLength = myArray[0].length;
    max = arrayLength - 1;
    min = 0;

    for( i = 0; i < arrayLength ; i++){ //コピー配列を作成　以下、コピー配列を操作する
        shuffleArray0[i]=myArray[0][i];
        shuffleArray1[i]=myArray[1][i];
        shuffleArray2[i]=myArray[2][i];
    }
    shuffleArray = [shuffleArray0,shuffleArray1,shuffleArray2];

    for( i = 0; i < arrayLength ; i++){
        var rand = Math.floor(Math.random()*(max + 1 -min) + min);
        temp = shuffleArray[0][i];
        shuffleArray[0][i] = shuffleArray[0][rand];
        shuffleArray[0][rand] = temp;

        temp = shuffleArray[1][i];
        shuffleArray[1][i] = shuffleArray[1][rand];
        shuffleArray[1][rand] = temp;
        
        temp = shuffleArray[2][i];
        shuffleArray[2][i] = shuffleArray[2][rand];
        shuffleArray[2][rand] = temp;

    }

    return shuffleArray;
}

function mixArray(myArray0,myArray1){   //二つの2行配列をMIX　3行目にどちらの配列からとったか0,1で表示

    var i;
    var arrayCount0;
    var arrayCount1;
    var selecter;
    var mixedArray = new Array;
    var mixedArray0 = new Array;
    var mixedArray1 = new Array;
    var mixedArray2 = new Array;

    arrayCount0=0;
    arrayCount1=0;
    var arrayLength0 = myArray0[0].length;
    var arrayLength1 = myArray1[0].length;
    var arrayLength = arrayLength0 + arrayLength1;

    for (i=0; i < arrayLength; i++){  //配列長の合計回数繰り返す
        if (arrayCount0 == arrayLength0 ){    //0番目の配列がすべて配置されていた場合
            mixedArray0[i]=myArray1[0][arrayCount1];
            mixedArray1[i]=myArray1[1][arrayCount1];
            mixedArray2[i]=myArray1[2][arrayCount1];
            arrayCount1++;
        }else if (arrayCount1 == arrayLength1 ){  //1番目の配列がすべて配置されていた場合
            mixedArray0[i]=myArray0[0][arrayCount0];
            mixedArray1[i]=myArray0[1][arrayCount0];
            mixedArray2[i]=myArray0[2][arrayCount0];
            arrayCount0++;
        }else { //0番目も1番目も配置されていないものがある場合
            selecter = Math.round(Math.random()); //乱数で0 or 1 発生
            if(selecter == 1){                       //乱数1の場合は配列1を加える
                mixedArray0[i]=myArray1[0][arrayCount1];
                mixedArray1[i]=myArray1[1][arrayCount1];
                mixedArray2[i]=myArray1[2][arrayCount1];
                arrayCount1++;
            }else{                                  //乱数１の場合は配列1を加える
                mixedArray0[i]=myArray0[0][arrayCount0];
                mixedArray1[i]=myArray0[1][arrayCount0];
                mixedArray2[i]=myArray0[2][arrayCount0];
                arrayCount0++;
            }
        }

    }

    mixedArray=[mixedArray0,mixedArray1,mixedArray2];

    return mixedArray;
}

function questionSellect(returnQselect){
    
    switch(returnQselect[1][0]){
        case 'なし':
            switch(returnQselect[1][1]){
                case 'たしざん':
                    shutsudai=makeQuestionNaitashi();
                    break;
                case 'ひきざん':
                    shutsudai=makeQuestionNaihiki();
                    break;
                case 'ミックス':
                    shutsudai=mixArray(makeQuestionNaitashi(),makeQuestionNaihiki());
                    
                    break;
            }
            break;
        case 'あり':
            switch(returnQselect[1][1]){
                case 'たしざん':
                    shutsudai=makeQuestionAritashi();
                    break;
                case 'ひきざん':
                    shutsudai=makeQuestionArihiki();
                    break;
                case 'ミックス':
                    shutsudai=mixArray(makeQuestionAritashi(),makeQuestionArihiki());
                    break;
            }
            break;
        case 'りょうほう':
            switch(returnQselect[1][1]){
                case 'たしざん':
                    shutsudai=mixArray(makeQuestionNaitashi(),makeQuestionAritashi());
                    break;
                case 'ひきざん':
                    shutsudai=mixArray(makeQuestionNaihiki(),makeQuestionArihiki());
                    break;
                case 'ミックス':
                    shutsudai=mixArray(mixArray(makeQuestionNaitashi(),makeQuestionAritashi()),mixArray(makeQuestionNaihiki(),makeQuestionArihiki()));
                    break;
            }
            break;      
    }
    return shutsudai;
    
}

function init() { //url以降の文字列取得
    var arr=Array();
    var parmeterQuestion=new Array();
    var parmeterQuestion0=new Array();
    var parmeterQuestion1=new Array();
    var ss = "";
    var querys=location.search;　//Location.serch内にUrl以降のデータが収納されている
    if(querys) {
        var q = querys.replace(/^\?/,'').split('&');　//パラメータをq配列に収納
        for(i=0 ; i<q.length ; i++){
            var pair=q[i].split('=');
            console.log("pair:"+pair);
            console.log(decodeURI(pair[0]));
            parmeterQuestion0[i]=pair[0];
            parmeterQuestion1[i]=decodeURI(pair[1]);
            console.log(parmeterQuestion0[i]);
            console.log(parmeterQuestion1[i]);
            arr[pair[0]]=pair[1];
            ss += pair[0] + " = " + decodeURI(pair[1]) + "\n";
        }
    }
    //alert("ひとつめ<br>"+ss);
    
    parmeterQuestion=[parmeterQuestion0,parmeterQuestion1];
    //alert("ふたつめ"+parmeterQuestion);
    return parmeterQuestion
}

function elapsedTime(startTimer){ //経過時間表示の設定
    stopTimer=new Date();    // 経過時間を退避
    myTime = stopTimer.getTime() - startTimer.getTime();    // 通算ミリ秒計算
    myH = Math.floor(myTime/(60*60*1000));    // '時間'取得
    myTime = myTime-(myH*60*60*1000);    
    myM = Math.floor(myTime/(60*1000));	// '分'取得
    myTime = myTime-(myM*60*1000);	
    myS = Math.floor(myTime/1000);	// '秒'取得
    myMS = myTime%1000;	// 'ミリ秒'取得
    document.getElementById('spanIdTimer').textContent =myM+"分"+myS+"秒";	
}

function jump0_nt(){　//計算をやめてトップページに戻る
 ch = document.formNameYame.inputNameCheck.checked    
 if(ch==true){
     location.href = "index.html";
 }
}

function inputCheck(code){ //buttonページ用　エンターが押されたら答え合わせ開始
    console.log("code:"+ code)
    if(13 === code){
        keisan();
    }
}

function keisan(){　//buttonページ用　答え合わせと表示 
//グローバル変数　a,b：問題の要素　c:符号(0:足し算、1:引き算)　shutsudaiShuffle：問題の配列　miss：間違えた回数
    var kotae = document.formNameKotae.inputNameKotae.value;

    //var toast = new Toast();
    var judge;
    var f;
    //100 以上の数字が入力されたらリジェクト
    //alert("答え"+kotae);
    //alert("num"+num)  
    //alert("code"+code)
    if(kotae!=""){
        if(num>=0){
            if(kotae < 100){
                switch(c){
                    case 0:
                        if(kotae == a+b){judge = true;}
                        else {judge=false;}
                    break;
                    case 1:
                    if(kotae == a-b){judge = true;}
                        else {judge=false;}
                    break;
                }
                if(judge == true){
                    i++;
                    switch(num % 3){
                        case 0:
                            iziToast.success({　//トースト表示
                                title: 'せいかい！' //message: '基本的な使い方'
                            });
                            //toast.show("せいかい！");
                            break;
                        case 1:
                            iziToast.success({　//トースト表示
                                title: 'あたり～' //message: '基本的な使い方'
                            });
                            //toast.show("あたり～");
                            break;
                        case 2:
                            iziToast.success({　//トースト表示
                                title: 'いいかんじ' //message: '基本的な使い方'
                            });
                            //toast.show("いいかんじ")
                            break;
                    }
                    document.formNameKotae.inputNameKotae.value = ""

                    if(num!=0){
                        a=shutsudaiShuffle[0][i];
                        b=shutsudaiShuffle[1][i];
                        c=shutsudaiShuffle[2][i];
                        num--;
                        if(c==0) {ope="+";}
                        else {ope="-";}

                        document.getElementById('spainIdMondai').textContent = a+ope+b+"=";
                        document.getElementById('spanIdNokori').textContent = num;
                        document.getElementById('inputIdKotae').focus();
                        }else{
                            lastTime=document.getElementById('spanIdTimer').textContent;
                            alert("おつかれさまでした！\nまちがえたかいすう　"+miss+"\nじかん："+lastTime)
                            
                            location.href = "index.html";
                        }       
                }else{
                    iziToast.error({　//トースト表示
                        title: 'ちがうよ！' //message: '基本的な使い方'
                    });

                    //toast.show("ちがうよ！");
                    miss++;
                    document.formNameKotae.inputNameKotae.value = "";
                    document.getElementById('inputIdKotae').focus();
                }
            }else{
                iziToast.error({　//トースト表示
                    title: 'まじめにやりましょう。' //message: '基本的な使い方'
                });
                //toast.show("まじめにやりましょう。");
                document.formNameKotae.inputNameKotae.value = "";
                document.getElementById('inputIdKotae').focus();
            }
        }
    }
 
}

function flashKeisan(time,shutsudaiShuffle){
        
    var num=shutsudaiShuffle[0].length-1;
    var answer;
    var i=0;

    timer=setInterval( function(){
        a=shutsudaiShuffle[0][i];
        b=shutsudaiShuffle[1][i];
        c=shutsudaiShuffle[2][i];
        
            switch(c){
            case 0:
                ope="+";
                answer=a+b;
            break;
            case 1:
                ope="-";
                answer=a-b;
            break;
            }
        document.getElementById('spainIdMondai').textContent = a+ope+b+"=";
        document.getElementById('spainIdKotae').textContent = "";
        console.log=("問題の回数："+i);
        
        window.setTimeout( function(){ 
            document.getElementById('spainIdKotae').textContent = answer;
            document.getElementById('spanIdNokori').textContent = num-i
            },time
        ); //timeミリ秒後に表示
        
        i++;
        if(i==num){
            clearInterval(timer);
            window.setTimeout( function(){
                alert("おしまい！")  //message: '基本的な使い方'
                location.href = "index.html";
            },time);
            
        }

        },time*2
    );
}

function opeSelect(c){
    switch(c){
        case 0:
            ope="+";
        break;
        case 1:
            ope="-";
        break;
    }
    return ope
}

