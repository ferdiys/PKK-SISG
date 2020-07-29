<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyOnPpdbuserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ppdbuser', function (Blueprint $table) {
            $table->foreign('ppdb_id')->references('id')->on('ppdb')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ppdbuser', function (Blueprint $table) {
            $table->dropForeign('ppdbuser_ppdb_id_foreign');
        });
    }
}
