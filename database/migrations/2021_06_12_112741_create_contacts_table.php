<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()   //this function is call then when we create the migration
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('name');    //string size 255 character
            $table->string('email');
            $table->string('subject');
            $table->text('message');    //text more size
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()      //function down we the call then when we want for delete the table from database or a row unique
    {
        Schema::dropIfExists('contacts');
    }
}
