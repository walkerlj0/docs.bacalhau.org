"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6796],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return t?n.createElement(m,i(i({ref:a},d),{},{components:t})):n.createElement(m,i({ref:a},d))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2565:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const r={sidebar_label:"Python Pandas",sidebar_position:6},i="Running Pandas on Bacalhau",l={unversionedId:"examples/workload-onboarding/python-pandas/index",id:"examples/workload-onboarding/python-pandas/index",title:"Running Pandas on Bacalhau",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/python-pandas/index.md",sourceDirName:"examples/workload-onboarding/python-pandas",slug:"/examples/workload-onboarding/python-pandas/",permalink:"/examples/workload-onboarding/python-pandas/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/python-pandas/index.md",tags:[],version:"current",lastUpdatedAt:1681470412,formattedLastUpdatedAt:"Apr 14, 2023",sidebarPosition:6,frontMatter:{sidebar_label:"Python Pandas",sidebar_position:6},sidebar:"documentationSidebar",previous:{title:"Python Custom Container",permalink:"/examples/workload-onboarding/Python-Custom-Container/"},next:{title:"R Custom Container",permalink:"/examples/workload-onboarding/r-custom-docker-prophet/"}},s={},p=[{value:"Introduction",id:"introduction",level:3},{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running Pandas Locally",id:"running-pandas-locally",level:2},{value:"Importing data from CSV to DataFrame",id:"importing-data-from-csv-to-dataframe",level:3},{value:"Running the script",id:"running-the-script",level:3},{value:"Ingesting data",id:"ingesting-data",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],d={toc:p},u="wrapper";function c(e){let{components:a,...t}=e;return(0,o.kt)(u,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-pandas-on-bacalhau"},"Running Pandas on Bacalhau"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/python-pandas/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/python-pandas/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Pandas is a Python package that provides fast, flexible, and expressive data structures designed to make working with data both easy and intuitive. It aims to be the fundamental high-level building block for doing practical, real-world data analysis in Python. Additionally, it has the broader goal of becoming the most powerful and flexible open source data analysis/manipulation tool available in any language. It is already well on its way towards this goal."),(0,o.kt)("h2",{id:"tdlr"},"TD;LR"),(0,o.kt)("p",null,"Running pandas script in Bacalhau"),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,o.kt)("h2",{id:"running-pandas-locally"},"Running Pandas Locally"),(0,o.kt)("p",null,"To run Pandas script on Bacalhau for analysis, first we will place the Pandas script in a container and then run it at scale on Bacalhau. To get started, you need to install the Pandas library from pip."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip install pandas\n")),(0,o.kt)("h3",{id:"importing-data-from-csv-to-dataframe"},"Importing data from CSV to DataFrame"),(0,o.kt)("p",null,"Pandas is built around the idea of a DataFrame, a container for representing data. Below you will create a DataFrame by importing a CSV file. A CSV file is a text file with one record of data per line. The values within the record are separated using the \u201ccomma\u201d character. Pandas provides a useful method, named ",(0,o.kt)("inlineCode",{parentName:"p"},"read_csv()")," to read the contents of the CSV file into a DataFrame. For example, we can create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"transactions.csv")," containing details of Transactions. The CSV file is stored in the same directory that contains Python script."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile read_csv.py\nimport pandas as pd\n\nprint(pd.read_csv("transactions.csv"))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\n# Downloading the dataset\nwget https://cloudflare-ipfs.com/ipfs/QmfKJT13h5k1b23ja3ZCVg5nFL9oKz2bVXc8oXgtwiwhjz/transactions.csv\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat transactions.csv\n")),(0,o.kt)("h3",{id:"running-the-script"},"Running the script"),(0,o.kt)("p",null,"Now let's run the script to read in the CSV file. The output will be a DataFrame object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython3 read_csv.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                                                hash  ...  transaction_type\n0  0x04cbcb236043d8fb7839e07bbc7f5eed692fb2ca55d8...  ...                 0\n1  0xcea6f89720cc1d2f46cc7a935463ae0b99dd5fad9c91...  ...                 0\n2  0x463d53f0ad57677a3b430a007c1c31d15d62c37fab5e...  ...                 0\n3  0x05287a561f218418892ab053adfb3d919860988b1945...  ...                 0\n\n[4 rows x 15 columns]\n")),(0,o.kt)("h2",{id:"ingesting-data"},"Ingesting data"),(0,o.kt)("p",null,"To run pandas on Bacalhau you must store your assets in a location that Bacalhau has access to. We usually default to storing data on IPFS and code in a container, but you can also easily upload your script to IPFS too."),(0,o.kt)("p",null,"If you are interested in finding out more about how to ingest your data into IPFS, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/data-ingestion/"},"data ingestion guide"),"."),(0,o.kt)("p",null,"We've already uploaded the script and data to IPFS to the following CID: ",(0,o.kt)("inlineCode",{parentName:"p"},"QmfKJT13h5k1b23ja3ZCVg5nFL9oKz2bVXc8oXgtwiwhjz"),". You can look at this by browsing to one of the HTTP IPFS proxies like ",(0,o.kt)("a",{parentName:"p",href:"https://cloudflare-ipfs.com/ipfs/QmfKJT13h5k1b23ja3ZCVg5nFL9oKz2bVXc8oXgtwiwhjz/"},"ipfs.io")," or ",(0,o.kt)("a",{parentName:"p",href:"https://bafybeih4hyydvojazlyv5zseelgn5u67iq2wbrbk2q4xoiw2d3cacdmzlu.ipfs.w3s.link/"},"w3s.link"),"."),(0,o.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,o.kt)("p",null,"After mounting the Pandas script and data from IPFS, we can now use the container for running on Bacalhau. To submit a job, run the following Bacalhau command:"),(0,o.kt)("p",null,"Now we're ready to run a Bacalhau job, whilst mounting the Pandas script and data from IPFS. We'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command to do this. The ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," flag allows us to mount a file or directory from IPFS into the container. The ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," flag takes two arguments, the first is the IPFS CID and the second is the path to the directory in the container. The ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," flag can be used multiple times to mount multiple directories."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\n bacalhau docker run \\\n--wait \\\n--id-only \\\n-i ipfs://QmfKJT13h5k1b23ja3ZCVg5nFL9oKz2bVXc8oXgtwiwhjz:/files \\\n-w /files \\\namancevice/pandas \\\n-- python read_csv.py\n")),(0,o.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"amancevice/pandas "),": Using the official pytorch Docker image")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-i ipfs://QmfKJT13h5k1b23ja3Z ....."),": Mounting the uploaded dataset to path")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-i https://raw.githubusercontent.com/py.........."),": Mounting our training script we will use the URL to this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pytorch/examples/blob/main/mnist_rnn/main.py"},"Pytorch example")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-w /files")," Our working directory is /outputs. This is the folder where we will to save the model as it will automatically gets uploaded to IPFS as outputs"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"}," python read_csv.py"),": python script to read pandas script"),(0,o.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get ${JOB_ID}  --output-dir results\n")),(0,o.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,o.kt)("p",null,"Each job creates 3 subfolders: the ",(0,o.kt)("strong",{parentName:"p"},"combined_results"),",",(0,o.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,o.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/combined_results/stdout # list the contents of the current directory \ncat results/combined_results/stdout # displays the contents of the file\n")))}c.isMDXComponent=!0}}]);