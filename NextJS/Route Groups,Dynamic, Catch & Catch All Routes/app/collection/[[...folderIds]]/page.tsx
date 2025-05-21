interface ParamType {
    params: {
        folderIds: []
    }
}

export default async function FolderId({params}: ParamType){

    return <div>
        Hi There!
        <br />
        {JSON.stringify((await params).folderIds)}
        <br />
        Hello ji!!
    </div>
}

