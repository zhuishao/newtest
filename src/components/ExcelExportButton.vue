<template>
    <div>
        <a-button type="primary" @click="showModal">导出表格</a-button>
        <a-modal
                title="导出为表格"
                v-model="visible"
                @ok="hideModal"
                okText="确认"
                cancelText="取消"
        >
            <div>
                <a-transfer
                        :dataSource="mockData"
                        :titles="['未选中', '选中']"
                        :targetKeys="targetKeys"
                        :selectedKeys="selectedKeys"
                        @change="handleChange"
                        @selectChange="handleSelectChange"
                        @scroll="handleScroll"
                        :render="item=>item.title"


                />
            </div>
        </a-modal>
        <br />
        <br />

    </div>
</template>
<script>

    function base64 (content) {
        return window.btoa(unescape(encodeURIComponent(content)));
    }
    export default {
        props:["data_column","data_id"],
        data() {
            return {
                visible: false,
                tableName:"表格",
                mockData: [],
                targetKeys:[],
                selectedKeys:[],
                disabled: false
            }
        },
        mounted(){

            let table=document.getElementById(this.data_id).getElementsByTagName('table');
            let thead=table[0].tHead;
            let cells=thead.rows[0].cells;
            for(let i=0;i<cells.length;i++){
                this.mockData.push({
                    key:i.toString(),
                    title:cells[i].textContent
                });
                this.targetKeys.push(i.toString());
                // this.tableList.arr.push(true);
                // this.tableList.thName.push(cells[i].textContent);
            }

        },
        methods: {
            showModal() {

                this.visible = true
                debugger;
            },
            hideModal() {
                let Table=document.getElementById(this.data_id).getElementsByTagName('table');
                let table=document.createElement('table');
                let tbody=document.createElement('tbody');
                let thead=document.createElement('thead');
                thead.insertRow(0);
                table.appendChild(thead);
                table.appendChild(tbody);
                for(let i=0;i<this.targetKeys.length;i++){
                    let k=parseInt(this.targetKeys[i]);
                    thead.rows[0].insertCell(i);
                    thead.rows[0].cells[i].appendChild(document.createTextNode(Table[0].tHead.rows[0].cells[k].textContent))
                }
                for(let i=0;i<Table[0].tBodies[0].rows.length;i++){
                    tbody.insertRow(i);
                    for(let j=0;j<this.targetKeys.length;j++){
                        let k=parseInt(this.targetKeys[j]);
                        tbody.rows[i].insertCell(j);
                        tbody.rows[i].cells[j].appendChild(document.createTextNode(Table[0].tBodies[0].rows[i].cells[k].textContent));
                    }
                }
                let excelContent = table.innerHTML;
                let excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
                excelFile += "<head><meta charset='UTF-8'><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>";

                excelFile += "<body><table>";

                excelFile += excelContent;

                excelFile += "</table></body>";
                excelFile += "</html>";
                let link = "data:application/vnd.ms-excel;base64," + base64(excelFile);
                let a = document.createElement("a");
                a.download = "表格.xls";
                a.href = link;
                a.click();
                this.visible = false;
                debugger;
            },
            handleChange(nextTargetKeys, direction, moveKeys) {
                this.targetKeys = nextTargetKeys;

                console.log('targetKeys: ', nextTargetKeys);
                console.log('direction: ', direction);
                console.log('moveKeys: ', moveKeys);
            },
            handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
                this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys]

                console.log('sourceSelectedKeys: ', sourceSelectedKeys);
                console.log('targetSelectedKeys: ', targetSelectedKeys);
            },
            handleScroll(direction, e) {
                console.log('direction:', direction);
                console.log('target:', e.target);
            },
            handleDisable(disabled) {
                this.disabled = disabled
            },
        }
    }
</script>
