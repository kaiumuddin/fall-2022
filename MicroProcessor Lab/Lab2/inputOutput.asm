org 100h
 
.model small
.data
.code
main proc  
    ;first number input
    mov ah,1
    int 21h
    mov bl,al  
   
    ;second number input
    mov ah,1
    int 21h  
    mov bh,al    
   
    ;first number print
    mov ah,2
    mov dl,bl
    int 21h
   
    ;second number print
    mov ah,2
    mov dl,bh
    int 21h
   
 
   
main endp