import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name: "vaibhav GET",
        email: "vaibhav@gmail.com"
    });
}

export function POST(){
    return NextResponse.json({
        name: "vaibhav POST",
        email: "vaibhav@gmail.com"
    })
}

export function PUT(){
    return NextResponse.json({
        name: "vaibhav PUT",
        email: "vaibhav@gmail.com"
    })
}

export function DELETE(){
    return NextResponse.json({
        name: "vaibhav DELETE",
        email: "vaibhav@gmail.com"
    })
}

